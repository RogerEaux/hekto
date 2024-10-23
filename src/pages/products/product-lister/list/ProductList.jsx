import List from '../../../../components/list/List';
import Preloader from '../../../../components/Preloader';
import ProductListCardWide from './ProductListCardWide';
import ProductListCard from './ProductListCard';
import { useSelector } from 'react-redux';

export default function ProductList({ fetchingStatus, products }) {
  const sortView = useSelector((state) => state.products.sort.view);

  return (
    <main>
      {fetchingStatus == 'pending' ? (
        <List
          list={Array(5).fill(null)}
          keyFn={(_, index) => index}
          classes={
            sortView === 'list' ? 'flex-col gap-32' : 'grid grid-cols-3 gap-32'
          }
        >
          {(_) => (
            <Preloader height={sortView === 'list' ? 'h-[22vh]' : 'h-[44vh]'} />
          )}
        </List>
      ) : (
        <List
          list={products}
          keyFn={(product) => product.id}
          classes={
            sortView === 'list' ? 'flex-col gap-32' : 'grid grid-cols-3 gap-32'
          }
        >
          {(product) =>
            sortView === 'list' ? (
              <ProductListCardWide {...product} />
            ) : (
              <ProductListCard {...product} />
            )
          }
        </List>
      )}
    </main>
  );
}
