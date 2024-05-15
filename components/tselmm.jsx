import NotFound from 'pages/404';
import { getAllProductsId, getProductData } from '@lib/api/products';
import { ProductView } from '@components/product/product-view';
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import type { Params, Product } from '@lib/api/products';

export async function getStaticPaths(): Promise<GetStaticPathsResult<Params>> {
  const paths = await getAllProductsId();

  return {
    paths,
    fallback: 'blocking'
  };
}

type ProductProps = {
  pid: string;
  productData: Product | null;
};

export async function getStaticProps({
  params
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<ProductProps>> {
  const { pid } = params!;
  const productData = await getProductData(pid);

  return {
    props: {
      pid,
      productData
    }
  };
}

export default function Product({ pid, productData }: ProductProps) {
  return productData ? (
    <ProductView pid={pid} productData={productData} />
  ) : (
    <NotFound pid={pid} />
  );
}
