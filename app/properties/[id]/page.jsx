// Get id ---> destructure params

const PropertyPage = ({ params, searchParams }) => {
  return (
    <div>
      Property Page {params.id} {searchParams.name}
    </div>
  );
};

export default PropertyPage;
