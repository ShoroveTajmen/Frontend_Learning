import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service;
  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-12 ml-[450px]">
      <form>
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {" "}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
        </div>
      </form>
      <div className="form-control mt-6">
        <input
          className="btn btn-primary btn-block"
          type="submit"
          value="Order Confirmed"
        />
      </div>
    </div>
  );
};

export default CheckOut;
