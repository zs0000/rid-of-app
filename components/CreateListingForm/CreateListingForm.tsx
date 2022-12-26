import useCreateListing from "../../hooks/useCreateListing";
import s from "./CreateListingForm.module.css"
import {useState, useReducer} from "react"
import {BsCameraFill} from "react-icons/bs"
import Image from "next/image";
import { useRouter } from "next/router";
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
    const router = useRouter()
    
    

    const current = new Date();

    const [listingData, setListingData] = useReducer(
        (data:Listing, partialData:Partial<Listing>) => ({
            ...data,
            ...partialData
        }),
        {listing_title:"", listing_description:"", listing_price:"", listing_image_url:""}
        )
    let inputs={
        user_id: data.id,
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
      if(listingMutation.isSuccess){
        router.push("/dashboard")
      }

  return (
    <div className={s.form}>
                <div className={s.topinputs}>
                <div className={s.bottomfirstbox}>
                        <div className={s.conditionbox}>
                            <select className={s.conditionselect}  placeholder="Choose item condition.">
                                <option className={s.disabledoption} selected disabled >
                                Item condition.
                                </option>
                                <option className={s.option}>
                                    Used
                                </option>
                                <option  className={s.option}>
                                    Like New
                                </option>
                                <option  className={s.option}>
                                    New
                                </option>
                                <option  className={s.option}>
                                    For parts
                                </option>
                            </select>
                        </div>
                        <div className={s.category}>
                            <select className={s.categoryselect}>
                                <option className={s.disabledoption} selected disabled >
                                Item category.
                                </option>
                                <option className={s.option}>
                                    Electronics & Media
                                </option>
                                <option className={s.option}>
                                    Home & Garden
                                </option>
                                <option className={s.option}>
                                    Clothing, Shoes, & Accessories
                                </option>
                                <option className={s.option}>
                                    Baby & Kids
                                </option>
                                <option className={s.option}>
                                    Vehicles                                   
                                </option>
                                <option className={s.option}>
                                    Toys, Games, & Hobbies
                                </option>
                                <option className={s.option}>
                                    Sports & Outdoors
                                </option>
                                <option className={s.option}>
                                    Collectibles & Art                                    
                                </option>
                                <option className={s.option}>
                                    Pet supplies
                                </option>
                                <option className={s.option}>
                                    Health & Beauty
                                </option>
                                <option className={s.option}>
                                    Wedding
                                </option>
                                <option className={s.option}>
                                    Business Equipment                                    
                                </option>
                                <option className={s.option}>
                                    Tickets
                                </option>
                                <option className={s.option}>
                                    General
                                </option>
                            </select>
                        </div>
                        <div className={s.localbox}>
                        <span className={s.locallabel}>
                            Pick-up available if local?
                        </span>
                        <input
                        type="checkbox"
                        className={s.pickup}
                        
                        />
                        </div>
                    </div>
                    <div className={s.firstbox}>
                    <div className={s.titlebox}>
                        <input
                        type="text"
                        id="listing_title"
                        placeholder="Listing title"
                        value={listingData.listing_title}
                        className={s.title}
                        onChange={(e)=> setListingData({
                            listing_title:e.target.value
                        })}
                        />
                    </div>
                    <div className={s.pricebox}>
                        {"$"}
                        <input type="text" min="1" max="10000"  onChange={(e)=> setListingData({
                            listing_price:e.target.value
                        })} value={listingData.listing_price} placeholder="1" className={s.value}>
                         
                        </input>
                        <input
                        type="range"
                        min="1"
                        max="10000"
                        placeholder="1"
                        id="listing_price"
                        value={listingData.listing_price}
                        onChange={(e)=> setListingData({
                            listing_price:e.target.value
                        })}
                        className={s.price}
                        />
                        
                    </div>
                    </div>
                    
                    <div className={s.secondbox}>
                        <div className={s.textareabox}>
                            <textarea
                            className={s.textarea}
                            value={listingData.listing_description}
                            placeholder="Listing description"
                            onChange={(e)=> setListingData({
                                listing_description:e.target.value
                            })}
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
                        <span className={s.statusmessage}>{postingImage ==  "none" ? "Please select a photo by clicking the camera above." : postingImage=="uploading" ? "Uploading..." : "Photo has been selected. "}</span>
                        {postingImage == "uploaded" ? 
                        <button
                        onClick={(e)=> {

                            handleImageSelect(e)
                        }}
                         className={s.changebutton}>
                            (click here to change selection.)
                        </button> : <></> }
                    </div>
                    <div className={s.buttonbox}>
                        <button onClick={()=> listingMutation.mutate()} className={s.button}>
                            Create
                        </button>
                    </div>
                    <input
                    type="file"
                    id="file_input"
                    onChange={(e)=> {
                        if(e.target.files[0]){
                            setPostingImage("uploading")
                        formData.append("file", e.target.files[0])
                        handleImageUpload(e)
                        }
                    }
                        
                     
                 }
                    
                    className={s.fileinput}

                    />
                </div>
            </div>
  )
}

export default CreateListingForm