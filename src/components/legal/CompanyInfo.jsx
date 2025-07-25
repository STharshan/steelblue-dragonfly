// src/components/CompanyInfo.jsx
export default function CompanyInfo() {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
        {/* Left side: Company details */}
        <div className="space-y-1 text-left">
          <div>
            <h3 className="text-4xl font-semibold mb-5">Name of company</h3>
            <p className="text-gray-600 text-lg font-semibold">Unit Three Mots Limited</p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold mb-5">Registered office</h3>
            <p className="ext-gray-600 text-lg font-semibold">
              Unit 3, 7 Wesley Street, Leicester LE4 5QG
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold mb-5">Company Registration No.</h3>
            <p className="ext-gray-600 text-lg font-semibold">11554428</p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold mb-5">VAT no.</h3>
            <p className="ext-gray-600 text-lg font-semibold">312 9247 17</p>
          </div>
        </div>

        {/* Right side: animated image inside background */}
        <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden">
          {/* Background */}
          <img
            src="/garage.webp"
            alt="Garage"
            className="w-full h-full object-cover"
          />

          {/* Moving Logo */}
          <img
            src="/logo.webp"
            alt="Logo"
            className="bg-white absolute top-1/2 left-0 transform -translate-y-1/2 animate-slide-logo w-72 sm:w-96"
          />
        </div>
      </div>
    </section>
  );
}
