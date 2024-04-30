export const fetchDroneLocation = async () => {
    try {
       const response = await fetch('https://your-api-endpoint.com/drone-location');
       const data = await response.json();
       return data;
    } catch (error) {
       console.error('Error fetching drone location:', error);
       throw error;
    }
   };
   