import { BorderCountry } from "@/app/country-info/CountryInfo";

export const BorderCountries: React.FC<{ borderCountries: BorderCountry[] }> = ({ borderCountries }) => (
  <section className="my-8">
    <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
      Border Countries
    </h2>
    
    <div>
      <div className="flex flex-wrap gap-4 justify-center">
        {borderCountries.map((borderCountry) => (
          <a
            key={borderCountry.countryCode}
            href={`/country-info?code=${borderCountry.countryCode}`}
            className="text-lg font-medium text-blue-600 hover:underline bg-gray-100 px-4 py-2 rounded-md shadow-sm transition hover:bg-blue-100"
          >
            {borderCountry.commonName}
          </a>
        ))}
      </div>
    </div>
  </section>
);
