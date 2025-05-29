//14강 
//문제1 
// 지역코드 타입
type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";

// 배송비 데이터 정의
const shippingCosts: Record<RegionCode, number> = {
  US: 10,
  EU: 15,
  ASIA: 20,
  AFRICA: 25,
};

// 배송비 계산 함수 작성
function calculateShippingCost(region: RegionCode, costs: Record<RegionCode, number>): number {
    if (region in costs) {
        return costs[region]
    } else {
        throw new Error("error...")
    }
}

console.log(calculateShippingCost("US", shippingCosts)); // 10
console.log(calculateShippingCost("EU", shippingCosts)); // 15
console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
// console.log(calculateShippingCost("AUSTRALIA", shippingCosts))

//문제 2
const scores: Record<string, number> = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
}

// 평균 점수 계산 함수 작성
function calculateAverageScore(scores: Record<string, number>): number {
  const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
  return total / Object.keys(scores).length
}

// 테스트 코드
console.log(calculateAverageScore(scores)); // 85


//문제 3
const prices: Record<string, number> = {
  Laptop: 1000,
  Phone: 500,
  Tablet: 300,
};

function updateProductPrice(products: Record<string, number>, updateProduct: string, updateProductPrice: number): Record<string, number> {
    return { ...products, [updateProduct]: updateProductPrice }
}

console.log(updateProductPrice(prices, "Phone", 550));
// 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }
console.log(updateProductPrice(prices, "newPhone", 350));
// 출력: { Laptop: 1000, Phone: 500, Tablet: 300, newPhone: 350 }
