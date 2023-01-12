const Contact = () => {

    return (

        <div className="flex justify-center w-full">
            <div className="p-8 bg-slate-200 rounded-md w-full max-w-3xl">
                <h2 className="text-3xl mb-8">Contact</h2>
                <textarea cols="30" rows="10" id="formMessage" name="formMessage" className="w-full mb-4" form="contactForm" placeholder="Meddelande"></textarea>
                <form action="">
                    <input type="text" id="formName" name="formName" className="w-full mb-4" placeholder="Namn" />
                    <input type="text" id="formEmail" name="formEmail" className="w-full mb-4" placeholder="E-mail" />

                    <input type="submit" name="formSubmit" id="formSubmit" className="p-1 px-4 rounded-md border border-sky-800 bg-sky-200 hover:bg-sky-100" />
                </form>
            </div>
        </div>

    )
}

export default Contact;
