import { Card, CardContent, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ProductCardProps {
  styleName: string;
  category: string;
  imageUrl: string;
  variants: number;
}

const ProductCard = ({ styleName, category, imageUrl, variants }: ProductCardProps) => (
  <Card className="relative">
    <div className="relative">
      <img src={imageUrl} alt={styleName} className="w-full aspect-square object-cover" />
      <div className="absolute top-2 right-2">
        <IconButton size="small" className="bg-white hover:bg-gray-100">
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="absolute bottom-2 left-2 bg-teal-500 text-white px-2 py-1 text-sm rounded">
        +{variants}
      </div>
    </div>
    <CardContent className="p-3">
      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-gray-300 mr-2" />
        <div>
          <Typography variant="subtitle2" className="font-medium">
            {styleName}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {category}
          </Typography>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const ProductGrid = () => {
  const products: ProductCardProps[] = Array(30).fill({
    styleName: 'Style Name',
    category: 'Apparel',
    imageUrl: 'https://via.placeholder.com/300',
    variants: 3
  });

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}; 