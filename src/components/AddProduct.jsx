import { MdOutlineAddAlarm } from "react-icons/md";
const AddProduct = () => {
  const handelProduct = (e) => {
    e.preventDefault();
    console.log("f");
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
      <form onSubmit={handelProduct} className="grid md:grid-cols-2 gap-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Product Name</span>
          </div>
          <input
            type="text"
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
            placeholder="Enter rand Name"
            className="input input-bordered w-full"
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Type</span>
          </div>
          <input
            type="text"
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
            placeholder="Enter image URL"
            className="input input-bordered w-full"
          />
        </label>
      </form>
      <button className="btn btn-block mt-4">Add Product</button>
    </div>
  );
};

export default AddProduct;
