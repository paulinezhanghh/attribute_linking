import { Button, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';

export const FilterBar = () => {
  const filters = [
    'filter name', 'filter name', 'filter name', 'filter name',
    'filter name', 'filter name', 'filter name', 'filter name',
    'filter name', 'filter name'
  ];

  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <Button
          startIcon={<FilterListIcon />}
          variant="outlined"
          size="small"
          className="text-gray-600"
        >
          Filter
        </Button>

        <div className="flex items-center space-x-2">
          <Button size="small" className="text-gray-600">
            More
          </Button>
          <Button size="small" className="text-gray-600">
            Flag
          </Button>
          <Button size="small" className="text-gray-600">
            Buy
          </Button>
          <Button size="small" className="text-gray-600">
            Sell
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            size="small"
          >
            Create Product
          </Button>
          <IconButton size="small">
            <GridViewIcon />
          </IconButton>
          <IconButton size="small">
            <ViewListIcon />
          </IconButton>
          <IconButton size="small">
            <MoreIcon />
          </IconButton>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter, index) => (
          <span key={index} className="filter-chip">
            {filter}
          </span>
        ))}
      </div>
    </div>
  );
}; 