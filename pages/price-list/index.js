import Headcomponent from "../../components/HeadComponent";

import { searchAllImages, mapImageResources, getFolders } from "../../lib/cloudinary";

export default function PriceList({ images, folders }) {
  console.log('images => ', images);
  console.log('folders => ', folders);
  return (
    <div>
      <Headcomponent title="Cennik usług" />
      <h4>Cennik usług</h4>
    </div>
  );
}

export async function getStaticProps() {

  const results = await searchAllImages()

  const { resources } = results;

  const images = mapImageResources(resources);

  const { folders } = await getFolders();
  console.log("folder =>", folders);

  return {
    props: {
      images,
      folders
    }
  }
}