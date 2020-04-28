import ProductsTable from './ProductsTable';
import NotificationsTable from './NotificationsTable';
import ShipmentsTable from './ShipmentsTable';

const tableNameToComponent = {
  products: ProductsTable,
  notifications: NotificationsTable,
  shipments: ShipmentsTable,
};

export default tableNameToComponent;
