// import React from 'react';
// import { usePhoto } from '@/hooks/usePhoto';

// type Photo = {
//   albumId: number;
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
// }

// const PhotosCard = () => {
//   const { data: photos, error, isLoading } = usePhoto();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error loading photos</div>;
//   }

//   return (
//     <div>
//       {photos && photos.map((photo: Photo) => (
//         <div key={photo.id}>
//           <h2>{photo.title}</h2>
//           <img src={photo.thumbnailUrl} alt={photo.title} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PhotosCard;
