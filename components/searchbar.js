import React, {useState} from 'react'
import Navcss from "../styles/Navbar.module.css"
import Link from 'next/link';


export default function searchBar({}) {
 const [searchInput, setSearchInput] = useState("");
  /* Add updated items to both searchbarjs and sidebarjs  */
 const searchList = [
  { name: "conditions", link: "/conditions/learn" },
  { name: "treatments", link: "/treatments/learn" },
  { name: "dermatochalasis", link: "/conditions/dermatochalasis" },
  { name: "ptosis", link: "/conditions/ptosis" },
  { name: "browptosis", link: "/conditions/browptosis" },
  { name: "chalazion", link: "/conditions/chalazion" },
  { name: "lesion", link: "/conditions/lesion" },
  { name: "blepharospasm", link: "/conditions/blepharospasm" },
  { name: "blepharoplasty", link: "/treatments/blepharoplasty" },
  { name: "lower blepharoplsty", link: "/treatments/lower%20blepharoplsty" },
  { name: "ELR", link: "/treatments/ELR" },
  { name: "ILR", link: "/treatments/ILR" },
  { name: "temporal brow lift", link: "/treatments/temporal%20brow%20lift" },
  { name: "incision and drainage", link: "/treatments/incision%20and%20drainage" },
  { name: "botox", link: "/treatments/botox" },
];
const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

return <div className={Navcss.Search}>
        <input className={Navcss.SearchInput}
          type="search"
          placeholder="Search"
          onChange={handleChange}
          value={searchInput} />
          <div className={Navcss.SearchResults}>
            {searchInput.length > 2 && searchList.filter((item) => {return item.name.match(searchInput.toLowerCase());}).map((item) => {
              return(<div className={Navcss.SearchResultsItem}><Link className={Navcss.SearchResultsItemLink} href={item.link}>• {item.name}</Link></div>)
            })}
          </div>
        </div>
};