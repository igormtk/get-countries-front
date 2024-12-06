import React from "react";
import Link from "next/link";
import Card from "@/components/Card";
import { Country } from "@/app/page";

interface CountryCardListProps {
    countries: Country[];
  }
  
  export const CountryCard: React.FC<CountryCardListProps> = ({ countries }) => {
    return (
      <div>
        {countries.map((country) => (
          <React.Suspense fallback={<div>Loading country card...</div>} key={country.name}>
            <Link href={`/country-info?code=${country.countryCode}`} passHref>
              <Card name={country.name} />
            </Link>
          </React.Suspense>
        ))}
      </div>
    );
  };