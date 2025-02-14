export default function BlogCard({ title, description, image, caption, link }) {
    return (
      <div className="max-w-md rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
        {/* Image Placeholder */}
        <div className="w-full h-48 bg-gray-200"></div>
  
        {/* Card Content */}
        <div className="p-5">
          <p className="text-sm text-gray-500 uppercase">{caption}</p>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
  
          {/* Read More Button */}
          <a
            href={link}
            className="block text-center mt-4 border border-gray-300 py-2 rounded-lg font-medium text-gray-800 hover:bg-gray-100"
          >
            Read More
          </a>
        </div>
      </div>
    );
  