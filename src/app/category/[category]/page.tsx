import DataCat from './Data';

export const generateMetadata = ({
  params: { category },
}: {
  params: { category: string };
}) => {
  return { title: `Frontend Mentor | ${category}` };
};

function CategoryPage({
  params: { category },
}: {
  params: { category: string };
}) {
  return (
    <>
      <DataCat category={category} />
    </>
  );
}

export default CategoryPage;
