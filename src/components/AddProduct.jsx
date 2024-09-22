// import { useState } from "react";
import { MdOutlineAddAlarm } from "react-icons/md";
import useAuth from "../hooks/useAuth";

const AddProduct = () => {
  // const { createUser } = useState(null);
  const { user } = useAuth() || {};
  const handleProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const imageUrl = form.imageUrl.value;
    const email = user.email;

    // Log all values for now
    const productData = { email, name, price, brand, type, rating, imageUrl };
    console.log(user);
    fetch("http://localhost:5000/shops", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          alert("Product add successful");
        }
      });
  };

  return (
    <div className="shadow-xl p-6 mt-6">
      <div>
        <h2 className="text-3xl text-center font-bold mb-4 flex justify-center items-center">
          <span className="text-orange-600 flex items-center">
            <MdOutlineAddAlarm className="mr-2" />
            Add
          </span>
          {""} Your Product
        </h2>
      </div>
      <form onSubmit={handleProduct}>
        <div className="grid md:grid-cols-2 gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Product Name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Product Price</span>
            </div>
            <input
              type="text"
              name="price"
              placeholder="Enter product price"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Brand Name</span>
            </div>
            <input
              type="text"
              name="brand"
              placeholder="Enter Brand Name"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Type</span>
            </div>
            <input
              type="text"
              name="type"
              placeholder="Enter Type"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <input
              type="text"
              name="rating"
              placeholder="Enter product Rating"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Image URL</span>
            </div>
            <input
              type="text"
              name="imageUrl"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <button type="submit" className="btn btn-block mt-4">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
