/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import Weather from "../components/Weather";
import BasicInfo from "../components/BasicInfo";


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
          <div>
            <img src={singleData?.img} alt="" className="cursor-pointer" onClick={openModal} />
          </div>
          <div className="py-10 ">
          <h2 className="font-bold text-xl ">About {singleData?.location}</h2>
            <h2 className="py-3">{singleData?.title}</h2>
            <p>{singleData?.desc}</p>
            <p className="py-3">Price: <span className="font-bold">${singleData?.price}</span></p>
          </div>
        </div>
        <div>
         <Weather/>
         <BasicInfo/>
        </div>
      </div>

      <div className="">
        <Modal
          className="inset-0 border-none px-10 pt-20 mb-20 hover:border-none focus:border-0"
          style={{ inset: "0 !important" }}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Video Modal"
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Rcv6bbCm-0k?si=AmX6pYdsbigkzsVn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <button
            className="bg-yellow-500 mt-10 px-2 py-1 rounded text-white mb-10"
            onClick={closeModal}
          >
            Close Video
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default DestinationDetails;
