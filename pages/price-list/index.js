import Headcomponent from "../../components/HeadComponent";
import { useState, useEffect } from "react";
import { searchPricesImage, mapImageResources } from "../../lib/cloudinary";

export default function PriceList({ images: defaultImages }) {
  const [images, setImages] = useState(defaultImages);
  console.log('price image => ', images);

  useEffect(() => {
    async function run() {
      const results = await fetch('/api/searchPricesImage', {
        method: "POST",
        body: JSON.stringify({
          expression: 'folder="kuba-car-wash-prices"'
        })
      }).then(r => r.json());
  
      const { resources } = results;
  
      const images = mapImageResources(resources);
  
      setImages(prev => {
        return [
          ...prev,
          ...images
        ]
      });
    }
  }, [])

  return (
    <div>
      <Headcomponent title="Cennik usług" />
      <h4>Cennik usług</h4>
      <div>
        {
          images.map(image => <img  
              width={700}
              height={800}
              key={image.asset_id}
              src={image.secure_url} 
            />)
        }
      </div>
    </div>
  );
}

export async function getStaticProps() {

  const results = await searchPricesImage({
    expression: 'folder="kuba-car-wash-prices"'
  })

  const { resources } = results;

  const images = mapImageResources(resources);

  return {
    props: {
      images,
    }
  }
}