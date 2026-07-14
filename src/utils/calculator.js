import { solarConfig } from "../data/solarConfig";

export function calculateSolar(systemType, systemSize, season) {

  const generation =
    solarConfig.seasons[season].generationPerKW;

  const dailyGeneration =
    generation * systemSize;

  const monthlyGeneration =
    dailyGeneration * 30;

  const yearlyGeneration =
    dailyGeneration * 365;

  const panels =
    Math.ceil((systemSize * 1000) / solarConfig.panelCapacity);

  const roofArea =
    systemSize * solarConfig.roofAreaPerKW;

  return {

  systemType,

  systemSize,

  dailyGeneration:
    dailyGeneration.toFixed(1),

  monthlyGeneration:
    monthlyGeneration.toFixed(0),

  yearlyGeneration:
    yearlyGeneration.toFixed(0),

  panels,

  roofArea,

  inverterEfficiency:
    solarConfig.inverterEfficiency,

  estimatedCost:
    Math.round(systemSize * 55000),

  subsidy:
    systemSize <= 3
      ? Math.round(systemSize * 30000)
      : Math.round(90000),

  finalInvestment:
    Math.round(
      systemSize * 55000 -
      (systemSize <= 3
        ? systemSize * 30000
        : 90000)
    ),

  yearlySavings:
    Math.round(
      yearlyGeneration * 7
    ),

  payback:
    (
      (
        systemSize * 55000 -
        (systemSize <= 3
          ? systemSize * 30000
          : 90000)
      ) /
      (yearlyGeneration * 7)
    ).toFixed(1)

};

}