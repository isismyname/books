
    // const [preview, setPreview] = useState(null)
    // const [form, setForm] = useState({
    //   fullname: "",
    //   email: "",
    //   password: "",
    //   address: "",
    //   gender: "",
    //   phone: "",
    // });

    // const handleChangeF = async (e) =>{
    //   setForm({
    //     ...form,
    //     [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value
    //   })

    //   if(e.target.type === "file"){
    //     let url = URL.createObjectURL(e.target.files[0])
    //     setPreview(url)
    //   }
    // }

    // const handleSR = async (e) =>{
    //   try {
    //     e.preventDefault();

    //     const settings = {
    //       headers:{
    //         "Content-Type": "multipart/form-data"
    //       }
    //     }

    //     const formData = new FormData();
    //     formData.set("fullname", form.fullname)
    //     formData.set("email", form.email)
    //     formData.set("password", form.password)
    //     formData.set("address", form.address)
    //     formData.set("gender", form.gender)
    //     formData.set("phone", form.a)

    //     const response = await API.post('/register', formData, settings)
    //     console.log(response)

    //     if(response.status === 200){
    //       switchR()
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }