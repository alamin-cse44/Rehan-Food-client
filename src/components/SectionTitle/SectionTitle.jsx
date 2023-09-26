
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="py-8 md: w-4/12 mx-auto text-center">
            <p className="text-sm text-yellow-500 italic mb-2">{subHeading}</p>
            <h3 className="text-4xl border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;