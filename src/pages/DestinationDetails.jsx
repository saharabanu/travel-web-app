/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from 'react-modal';

const DestinationDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    const foundSingleData = details.find((project) => project?.id === parseInt(id));
    setSingleData(foundSingleData);
  }, [details, id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-4 px-16 py-10">
        <div>
          <img src={singleData?.img} alt=""  className="cursor-pointer" onClick={openModal}/>
        </div>
        <div>
          <h2>{singleData?.title}</h2>
          <h2>{singleData?.desc}</h2>
          <h2>{singleData?.price}</h2>
        </div>
      </div>
<div className="w-36">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
      >
        {/* Add your video component or embed code here */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Rcv6bbCm-0k?si=AmX6pYdsbigkzsVn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/your_video_id" title="Video" frameBorder="0" allowFullScreen></iframe> */}
        <button className="bg-yellow-500 mt-10 px-2 py-1 rounded text-white" onClick={closeModal}>Close Video</button>
      </Modal>
      </div>

      {/* {isModalOpen && (
        <Modal closeModal={closeModal}>
          
          <iframe
            width="560"
            height="315"
            src='https://www.youtube.com/watch?v=Rcv6bbCm-0k' 
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Modal>
      )} */}
    </div>
  );
};

export default DestinationDetails;
