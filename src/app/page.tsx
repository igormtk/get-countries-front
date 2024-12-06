"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { getCountries } from "@/services/getCountries";
import { Spinner } from "@/components/Spinner";
import { CountryHeader } from "@/components/CountryHeader";
import { Error } from "@/components/Error";
import { CountryCard } from "@/components/CountryCard";

export interface Country {
  name: string;
  countryCode: string;
}

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCountries = useCallback(async () => {
    try {
      const response = await getCountries();
      setCountries(response);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const memoizedCountries = useMemo(() => countries, [countries]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {error && <Error message={error} />}
      {loading && <Spinner/>}
      {!loading && !error && memoizedCountries.length > 0 && (
      <><CountryHeader total={memoizedCountries.length} /><div>
          {memoizedCountries.map((country) => (
            <div key={country.name}>
              <CountryCard countries={[country]} />
            </div>
          ))}
        </div></>
      )}
    </main>
  );
}
