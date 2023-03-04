import './categories.styles.scss';
import CatDirectory from './components/cat-directory/cat-directory';



const App = () => {
  const categories = [ 
    {
      "id": 1,
      "title": "Hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "Womens",
      "imageUrl": "https://a-static.besthdwallpaper.com/gorgeous-korean-celeb-iu-lee-ji-eun-wallpaper-3440x1440-71031_15.jpg"
    },
    {
      "id": 5,
      "title": "Mens",
      "imageUrl": "https://64.media.tumblr.com/d8770ec6b9c7b5fc6098497bd1fa1a29/tumblr_nk3lllIyvW1qeqho3o1_1280.jpg"
    }
  ]

  return(
    <CatDirectory categories={categories}/>
  )
};

export default App;
