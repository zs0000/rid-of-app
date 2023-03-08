import usePaginatedListings from "../../hooks/usePaginatedListings"
import AvailableItems from "../AvailableItems/AvailableItems"
import s from "./PaginatedListings.module.css"
import {FiMenu} from "react-icons/fi"
import{useState} from  'react'
import Link from "next/link"

function PaginatedListings({pageNumber}:{pageNumber:number}) {
  const [openMenu, setMenuOpen] = useState(false);  
  const paginatedListings = usePaginatedListings({pageNumber})

  const handleToggleMenu = async(e) =>{
    e.stopPropagation()
    try {

     setMenuOpen(!openMenu)      
    } catch (error) {
      throw new Error
    }
  }

  let tempArr:number[] =[]
  let tempVal = paginatedListings.data?.maxPageNumber
  for(let i = 0; i< tempVal; i++){
    tempArr.push(i+1)
  }

    
    return (
    <div className={s.container}>
       <div className={s.categorybar}>
            <div className={s.categories}>
              <div className={s.menubox} onClickCapture={(e)=> handleToggleMenu(e)}>
                <FiMenu className={s.menuicon} />
              </div>
              <div className={openMenu ? s.menuitems : "hidden"}>
                  <div className={s.itemcontainer}>
                  <Link href="/electronics-and-media/1" className={s.link}>
                                    Electronics & Media
                                </Link>
                                <Link href="/home-and-garden/1" className={s.link}>
                                    Home & Garden
                                </Link>
                                <Link href="/clothing-shoes-and-accessories/1" className={s.link}>
                                    Clothing, Shoes, & Accessories
                                </Link>
                                <Link href="/baby-and-kids/1" className={s.link}>
                                    Baby & Kids
                                </Link>
                                <Link href="/vehicles/1" className={s.link}>
                                    Vehicles                                   
                                </Link>
                                <Link href="/toys-games-and-hobbies/1" className={s.link}>
                                    Toys, Games, & Hobbies
                                </Link>
                                <Link href="/sports-and-outdoors/1" className={s.link}>
                                    Sports & Outdoors
                                </Link>
                                <Link href="/collectibles-and-art/1" className={s.link}>
                                    Collectibles & Art                                    
                                </Link>
                                <Link href="/pet-supplies/1" className={s.Link}>
                                    Pet supplies
                                </Link>
                                <Link href="/health-and-beauty/1"  className={s.Link}>
                                    Health & Beauty
                                </Link>
                                <Link href="/wedding/1" className={s.Link}>
                                    Wedding
                                </Link>
                                <Link  href="/business-equipment/1" className={s.Link}>
                                    Business Equipment                                    
                                </Link>
                                <Link href="/tickets/1" className={s.Link}>
                                    Tickets
                                </Link>
                                <Link href="/general/1" className={s.Link}>
                                    General
                                </Link>
                  </div>
              </div>
            </div>
            </div>
       {paginatedListings ? 
        <AvailableItems listingItems={paginatedListings}/>
        :
        <>
        fetching..
        </>
        }
        <div className={s.pageselectbar}>
            
      <div className={s.pageselect}>
        {paginatedListings ? tempArr.map((item)=>(
          <Link href={`/available/${item}`} className={s.pagenumber} key={item}>
            {item}
          </Link>
        ))
          :
          <>no</>
      }
      </div>
    </div>
    </div>
  )
}

export default PaginatedListings