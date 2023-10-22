import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios';
import CategoryForm from '../../components/Form/CategoryForm';
import { useAuth } from '../../Context/auth';
import { Modal } from "antd";

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("")
    const [auth, setAuth] = useAuth();
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");

    //handle form
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post("http://localhost:8080/api/v1/category/create-category", { name }
                , {
                    headers: {
                        "login-user": JSON.stringify(auth?.user),
                        "Authorization": auth?.token
                    }
                })
            if (data?.success) {
                console.log(`${name} is created`)
                getAllCategory();
            }
            else {
                console.log(data.message)
            }
        } catch (error) {
            console.log(error);
        }
    }
    //get all categories
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/v1/category/get-category");
            if (data.success) {
                setCategories(data.category);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllCategory();
    }, []);

 //delete category
 const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8080/api/v1/category/delete-category/${pId}`,
        {
            headers: {
                "login-user": JSON.stringify(auth?.user),
                "Authorization": auth?.token
            }
        }
      );
      if (data.success) {
        console.log(`category is deleted`);

        getAllCategory();
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log("Somtihing went wrong");
    }
  };

    //update category
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(
                `http://localhost:8080/api/v1/category/update-category/${selected._id}`,
                { name: updatedName },
                {
                    headers: {
                        "login-user": JSON.stringify(auth?.user),
                        "Authorization": auth?.token
                    }
                }
            );
            if (data.success) {
                console.log(`${updatedName} is updated`);
                setSelected(null);
                setUpdatedName("");
                setVisible(false);
                getAllCategory();
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.log("Somtihing went wrong");
        }
    };
    return (
        <>
            <Layout title={"Dashboard - Create Category"}>
                <div className="container-fluid m-3 p-3 dashboard">
                    <div className="row">
                        <div className="col-md-3">
                            <AdminMenu />
                        </div>
                        <div className="col-md-9" >
                            <h4 className='mr-auto d-flex'>Manage Category</h4>
                            <div className='p-3 ml-auto'>
                                <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
                            </div>


                            <div className='w-100'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories?.map((c) => (
                                            <>
                                                <tr>
                                                    <td key={c._id}>{c.name}</td>
                                                    <td>
                                                        <button className='btn btn-primary ms-2' onClick={() => {
                                                            setVisible(true);
                                                            setUpdatedName(c.name);
                                                            setSelected(c);
                                                        }}>Edit</button>
                                                        <button className='btn btn-danger ms-2' onClick={() => {
                                                            handleDelete(c._id);
                                                        }}>Delete</button>
                                                    </td>
                                                </tr>
                                            </>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                            <Modal
                                onCancel={() => setVisible(false)}
                                footer={null}
                                visible={visible}
                            >
                                <CategoryForm
                                    value={updatedName}
                                    setValue={setUpdatedName}
                                    handleSubmit={handleUpdate}
                                />
                            </Modal>

                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}

export default CreateCategory