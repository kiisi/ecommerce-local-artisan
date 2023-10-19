import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./form.scss";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";
import { AiOutlineClose } from "react-icons/ai";
import Loader from "../Loader/Loader";
import { UserContext } from "../../contexts/userContext";

const AddProductForm = ({ setFormOpen }) => {
  const { currentUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [category, setCategory] = useState("");
  const [otherImages, setOtherImages] = useState([]);
  const [error, setError] = useState("");

  const handleOtherImagesChange = (e) => {
    const existingImage = otherImages.find(item => item.name === e.name);

    if (otherImages.length > 4 || existingImage) return;

    setOtherImages([...otherImages, e]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const uploadPromises = otherImages.map((file) => upload(file));
      const urls = await Promise.all(uploadPromises);

      const url = await upload(coverImage);

      await newRequest.post("/products", {
        title,
        userId: currentUser._id,
        username: currentUser.username,
        coverImage: url.toString(),
        images: urls,
        description,
        price,
        category,
        deliveryFee,
      });

      setTitle('');
      setCategory('');
      setDeliveryFee(0);
      setDescription("");
      setOtherImages([]);
      setPrice("");
      setCoverImage(null);
      setSelectedFiles([]);
      setFormOpen(false);
      setLoading(false);

      toast.success('Product has been created successfully!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      setError(error);
      console.log(error.message);
      toast.error(error.message, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    }
  };

  return (
    <div className='formContainer'>
      <ToastContainer />
      {
        loading ? <Loader /> :
          <form className="form" onSubmit={handleSubmit}>
            {/* ... (your input fields and other form elements) ... */}
            <button className='formSubmitBtn' type="submit" style={{ marginTop: '20px' }}>Add Product</button>
          </form>
      }
    </div>
  );
};

export default AddProductForm;
