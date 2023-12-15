import Link from "next/link"
import Image from "next/image"




export default function ArtPiecePreview({piece}){
return (
    
      <Image
    src={piece.images}
    height={piece.dimensions.height}
    width={piece.dimensions.width}
    alt={piece.name}
  />
    
    
)
}            
               