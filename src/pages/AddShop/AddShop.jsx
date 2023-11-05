import axios from "axios";

const AddShop = () => {
    const handleAddShop = e =>{
        e.preventDefault()
        const form = e.target;
        const shopName = form.shopname.value;
        const shopOwner = form.shopowner.value;
        const ownerContact = form.contact.value;
        const onwerEmail = form.email.value;
        const isOwnerOperator = form.isOwnerOperator.value;
        const password = form.password.value;
        const passwordRepeat = form["password-repeat"].value;
        const address = form.address.value;

        const newShopData = {
            shopName,
            shopOwner,
            ownerContact,
            onwerEmail,
            isOwnerOperator,
            password,
            passwordRepeat,
            address
        }

        if(password == passwordRepeat){
            axios.post("http://localhost:5000/add-new-shop", newShopData)
            .then(res => console.log("Response Data" ,res.data))
        }
        // console.log(newShopData);
    }
    return (
        <div className="w-11/12 mx-auto h-screen">
            <h1 className="text-center text-3xl font-bold underline">Add a New Shop</h1>
            <form className="grid grid-cols-2 gap-6 my-5" onSubmit={handleAddShop}>
                <input type="text" name="shopname" placeholder="Enter Shop Name" className="input input-bordered input-info w-full" required />
                <input type="text" name="shopowner" placeholder="Enter Shop Owner Name" className="input input-bordered input-info w-full" required />
                <input type="number" name="contact" placeholder="Shop Owner Mobile Number" className="input input-bordered input-info w-full" required />
                <input type="email" name="email" placeholder="Shop Owner Email" className="input input-bordered input-info w-full" required />
                <select name="isOwnerOperator" className="select select-info col-span-2">
                    <option disabled selected className="w-full">Is the shop owner himself operator?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered input-info w-full" required />
                <input type="password" name="password-repeat" placeholder="Confirm Password" className="input input-bordered input-info w-full" required />
                <textarea name="address" className="textarea textarea-accent col-span-2" placeholder="Shop Address In details"></textarea>
                <input type="submit" value="Submit"  className="btn btn-accent col-span-2"/>
            </form>
        </div>
    );
};

export default AddShop;