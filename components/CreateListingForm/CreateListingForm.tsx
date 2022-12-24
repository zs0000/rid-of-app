import useCreateListing from "../../hooks/useCreateListing";
import s from "./CreateListingForm.module.css"
import {useState, useReducer} from "react"
import {BsCameraFill} from "react-icons/bs"
import Image from "next/image";
const axios = require('axios').default;
interface Listing {
    listing_title?:string;
    listing_description?:string;
    listing_price?:any;
    listing_image_url?:string;
  }
function CreateListingForm({data}) {
    const [price, setPrice] = useState("")
    const [imageSelected, setImageSelected] = useState("");
    const [postingImage, setPostingImage] = useState("none");
    const [imageUrl, setImageUrl] = useState(null);
   
    
    

    const current = new Date();

    const [listingData, setListingData] = useReducer(
        (data:Listing, partialData:Partial<Listing>) => ({
            ...data,
            ...partialData
        }),
        {listing_title:"", listing_description:"", listing_price:"", listing_image_url:""}
        )
    let inputs={
        id: data.id,
        username:data.username,
        listing_title:listingData.listing_title,
        listing_description:listingData.listing_description,
        listing_image_url:imageUrl,
        listing_price:listingData.listing_price,
        listing_created_on:current,
    }
    
    const listingMutation = useCreateListing(inputs)
    const formData = new FormData()
    formData.append("upload_preset", "jrkwcuxy")
    const handleImageSelect = (e) => {
        e.stopPropagation()
        document.getElementById('file_input')?.click();
        
    }
    const handleImageUpload = async(e) =>{
      e.preventDefault()
       try {
       
       
        axios.post("https://api.cloudinary.com/v1_1/repdb/image/upload",formData).then(function (response) {
            setImageUrl(response.data.url)
            setPostingImage("uploaded")
          })
       } catch (err) {
        console.error(err.message)
       }
      } 


  return (
    <div className={s.form}>
                <div className={s.topinputs}>
                    <div className={s.firstbox}>
                    <div className={s.titlebox}>
                        <input
                        type="text"
                        id="listing_title"
                        placeholder=""
                        className={s.title}
                        />
                    </div>
                    <div className={s.pricebox}>
                        {"$"}
                        <input type="text" onChange={(e)=> setPrice(e.target.value)} value={price} placeholder="1" className={s.value}>
                         
                        </input>
                        <input
                        type="range"
                        min="1"
                        max="10000"
                        placeholder="1"
                        id="listing_price"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                        className={s.price}
                        />
                        
                    </div>
                    </div>
                    <div className={s.secondbox}>
                        <div className={s.textareabox}>
                            <textarea
                            className={s.textarea}

                            />
                        </div>
                    </div>
                </div>
                <div className={s.picturebox}>
                    <div className={s.svgbox}>
                    { postingImage == "uploaded" ? <Image src={imageUrl} alt="listing photo" width={500} height={500} className={s.image} /> :<BsCameraFill className={s.svg} onClick={(e)=> handleImageSelect(e)}/>}
                    </div>
                </div>
                <div className={s.bottombox}>
                    <div className={s.statusbox}>
                        <span className={s.status}>
                        {"Status: "}
                        </span>
                        <span>{postingImage ==  "none" ? "Please select a photo by clicking the camera above." : postingImage=="uploading" ? "Uploading..." : "Photo has been selected."}</span>
                    </div>
                    <div className={s.buttonbox}>
                        <button onClick={()=> handleImageUpload()} className={s.button}>
                            Create
                        </button>
                    </div>
                    <input
                    type="file"
                    id="file_input"
                    onChange={(e)=> {
                        setPostingImage("uploading")
                        formData.append("file", e.target.files[0])
                        handleImageUpload(e)
                    }
                        
                     
                 }
                    
                    className={s.fileinput}

                    />
                </div>
            </div>
  )
}

export default CreateListingForm