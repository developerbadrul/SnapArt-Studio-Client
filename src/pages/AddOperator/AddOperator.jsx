
const AddOperator = () => {
    
    return (
        <div className="w-11/12 mx-auto h-screen">
            <h1 className="text-center text-3xl font-bold underline">Add New Operator</h1>
            <form className="grid grid-cols-2 gap-6 my-5" >
                <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered input-info w-full" required />
                <input type="number" name="contact" placeholder="Mobile Number" className="input input-bordered input-info w-full" required />
                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered input-info w-full" required />
                <select className="select select-info">
                    <option disabled selected  className="w-full">Select Your Shop</option>
                    <option>Bismillah Computer</option>
                    <option>SE Tecnology</option>
                </select>
                <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered input-info w-full" required />
                <input type="password" name="password-repeat" placeholder="Confirm Password" className="input input-bordered input-info w-full" required />
                <textarea name="address" className="textarea textarea-accent col-span-2" placeholder="Present Address In details"></textarea>
                <input type="submit" value="Submit"  className="btn btn-accent col-span-2"/>
            </form>
        </div>
    );
};

export default AddOperator;