export function useGetFlag(countryCode : string) : string {
  return `https://flagsapi.com/${countryCode}/flat/32.png`;
}