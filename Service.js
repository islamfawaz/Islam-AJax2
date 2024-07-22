export class Service {
    constructor(Url) {
        this.Url = Url;
    }

    get = async () => {
        try {
            const response = await fetch(this.Url);
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching', error);
        }
    }
}
