import React from 'react';
import Layout from '../components/Layout/Layout';
import gallerydes from '../pages/pagescss/gallerycss.css';

// const imageFilenames = ['1.jpg', '2.jpg']; // Add only the desired image filenames

const Gallery = () => {
  return (
    <>
      <Layout title={"Gallery-Ashutosh Enterprise"}>
        <gallerydes>
        <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm image-card">
            <img src={require('../pages/photospages/1.jpg')} alt="" />
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm image-card">
            <img src={require('../pages/photospages/10')} alt="" style={{'height':'300px'}}/>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm image-card">
            <img src={require('../pages/photospages/12')} alt="" style={{'height':'300px','width':'300px'}}/>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm image-card">
            <img src={require('../pages/photospages/7.jpg')} alt="" />
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm image-card">
            <img src={require('../pages/photospages/8.jpg')} alt="" />
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm image-card">
            <img src={require('../pages/photospages/11.jpg')} alt="" />
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm image-card">
            <img src={require('../pages/photospages/12')} alt="" style={{'height':'300px','width':'300px'}}/>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm image-card">
            <img src={require('../pages/photospages/13')} alt="" style={{'height':'300px'}}/>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm image-card">
            <img src={require('../pages/photospages/14')} alt="" style={{'height':'300px','width':'300px'}}/>
          </div>
        </div>
      </div>
    </div>
  </div>
        </gallerydes>
      </Layout>
    </>
  );
};

export default Gallery;
