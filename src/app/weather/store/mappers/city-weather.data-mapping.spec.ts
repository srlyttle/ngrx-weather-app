import { mockResponses } from '@app/weather/api-samples';

describe('Weather Mapping to Models ', () => {

    it('should create', () => {
        const responseObject = mockResponses.cityWeatherResponse;
        expect(responseObject).toBeDefined();
    });
});
