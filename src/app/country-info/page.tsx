"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getCountryDetails } from "@/services/getCountryDetails";
import { PopulationChart } from "@/components/PopulationChart";
import Image from "next/image";
import { BorderCountries } from "@/components/BorderCountries";

export interface BorderCountry {
  countryCode: string;
  commonName: string;
}

export interface Population {
  year: number;
  value: number;
}

export interface Country {
  name: string;
  flag: string;
  population: Population[];
  borderCountries: BorderCountry[];
}

export default function CountryInfo() {
  const searchParams = useSearchParams();
  const countryCode = searchParams.get('code'); // Obtém o código do país da URL

  // Tipando o estado corretamente, pode ser um objeto Country ou null
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (countryCode) {
      setLoading(true);
      const fetchCountry = async () => {
        try {
          const response = await getCountryDetails(countryCode);
          setCountry(response);
        } catch (error) {
          setError((error as Error).message);
        } finally {
          setLoading(false);
        }
      };

      fetchCountry();
    }
  }, [countryCode]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!country) {
    return <div>Country not found</div>;
  }

  // Flag URL, checking if it's valid
  const flagUrl = country.flag && country.flag !== 'Flag data not found' ? country.flag : '/path/to/default-flag.png';

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 mt-4">{country.name}</h1>
      {/* Displays the flag image, or a default image if no valid flag */}
      {flagUrl ? (
        <Image src={flagUrl} alt={country.name} width={200} height={200} />
      ) : (
        <p>No flag available</p>
      )}

      {/* Displaying population chart */}
      <PopulationChart data={country.population} />

      {/* Displaying border countries */}
      <BorderCountries borderCountries={country.borderCountries} />
    </div>
  );
}
