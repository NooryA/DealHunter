import { NewspaperTwoTone, SettingsApplicationsRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Appbar from "./AppBar";
import { LoadingButton } from '@mui/lab';
import BrandFetch from './BrandFetch'
import SendIcon from '@mui/icons-material/Send';
import{useQuery} from 'react-query'
import ItemComponent from "./ItemComponent";
import Item from "./Item";
import AppBarWithoutSearch from "./AppBarWithoutSearch";

function BrandComponent() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [brands,setBrands] = useState([]);
  const [ filter, setFilter] =  useState([]);
 


 

  
/*
  function handleClick(item) {
  
   
      fetch(`/items/?brand=${item}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
        
  }
*/
  useEffect(() => {
    fetch("/items")
      .then(res => res.json())
      .then(
        (result) => {

         
          setIsLoaded(true);
          setItems(result);
          setFilter(result)
          let arr = result.map(item=>item.brand)
          let removedDuplicateBrands = [...new Set(arr)];
          setBrands(removedDuplicateBrands)
          console.log(result)
 
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

const filterBrand = (uniqueBrand) =>{

console.log(uniqueBrand)
const filteredItems=items.filter(item => item.brand == `${uniqueBrand}`)
setFilter(filteredItems)

}



  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (



      <div style={{"text-align":"center", "margin-top":"5em","padding":"20px"}}>
        <Appbar items = {filter}/>
        {brands.map( brand => (
        <LoadingButton
        size="small"
        onClick= {()=>filterBrand(brand)}
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        style={{"margin-right":"20px"}}
      >
              {brand}

      </LoadingButton>
      
         ))}

   


   
      
  </div>
    )}
}





export default BrandComponent;





/*
class BrandComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchedItems: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    console.log("component did mount");
    fetch("/items/brands", {
      crossDomain: true,
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        console.log(json[1])
        const info = this.state.items;
        if (info !== undefined) {
          this.setState({ items: json, DataisLoaded: true });
        }
      });
  }

  render(props) {
    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <h1>Please wait...</h1>
        </div>
      );

    return (
      <div className="item-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <h1> featured items </h1>

          <br />
        </div>
        {items
          .filter((val) => {
            if (this.props.inputText == "") {
              return val;
            }  {
              return val;
            }
          })
          .map((item) => (
            <div className="card">
              <img
                src="https://m.media-amazon.com/images/I/21DejQuoT2L.jpg"
                alt=""
              />
              <h3>{item}</h3>
              <p>{item.description}</p>
              <h3>{item.name}</h3>$$:{item.price}, Item_Quantity:{" "}
              {item.quantity}
              <h3>{item.type}</h3>
            </div>
          ))}
      </div>
    );
  }
}
*/

