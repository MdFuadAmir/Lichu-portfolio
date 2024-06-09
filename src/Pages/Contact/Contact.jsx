

const Contact = () => {
    return (
        <div className="mt-24 px-4 space-y-6 md:space-y-10">
            <div className=" text-center space-y-2">
                <h1 className="text-4xl font-mono font-bold">Contact us</h1>
                <p>Please fill out the form below to contact me</p>
            </div>
            {/* contact form */}
            <div className="flex justify-center mt-10">
            <div className="md:w-2/3 border p-4 md:p-8 space-y-8 bg-gray-100 rounded-xl">
                <h1 className="text-center font-semibold font-serif text-2xl">Send Your Message</h1>
                <form className="" action="https://getform.io/f/zaxdqpqa" method="POST">
                <div className="mb-4 space-y-2">
                    <label className="text-lg font-semibold font-serif">Full Name</label><br />
                    <input type="text" required name="name" id="" placeholder="your Name" className="w-full rounded-md px-2 py-1"/>
                </div>
                <div className="mb-4 space-y-2">
                    <label className="text-lg font-semibold font-serif">Email Address</label><br />
                    <input type="email" required name="email" id="" placeholder="Your email" className="w-full rounded-md px-2 py-1"/>
                </div>
                <div className="space-y-2">
                <label className="text-lg font-semibold font-serif">Massage</label><br />
                <textarea name="massage" id="" required placeholder="Your Massage" className="w-full rounded-md px-2 py-1"></textarea>
                </div>
                <div className="mt-5">
                <button type="submit" className="bg-black text-white rounded-xl px-6 py-2 hover:bg-slate-700 duration-300">Send</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Contact;