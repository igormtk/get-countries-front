import { BorderCountry } from "@/app/country-info/page";

export const BorderCountries: React.FC<{ borderCountries: BorderCountry[] }> = ({ borderCountries }) => (
  <section className="my-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
      Border Countries
    </h2>
    
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <ul className="p-6 space-y-4">
        {borderCountries.map((borderCountry) => (
          <li key={borderCountry.countryCode} className="text-lg font-medium text-blue-600 hover:underline">
            <a href={`/country-info?code=${borderCountry.countryCode}`}>
              {borderCountry.commonName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
