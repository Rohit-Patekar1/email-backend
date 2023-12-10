import {  connectToDatabase } from "..";
import { Collections } from "../util/enum";

export async function fetchTransactions(
  skip: number,
  limit: number,
) {
 
  
  try {
    if(skip!==0)
    skip-=10;
    const pipeline = [
      {
        $facet: {
          metadata: [{ $count: "total" }],
          data: [
            { $skip: skip },
            { $limit: limit },
            {
              $project: {
                email: 1,
                name: 1,
                yearOfBirth: 1,
                timestamp: 1,
              },
            },
          ],
        },
      },
    ];
    

    const result= await (await connectToDatabase()).db('wallet-app').collection(Collections.emailData).aggregate(pipeline).toArray()
  
    const metadata = result[0].metadata[0] ? result[0].metadata[0].total : 0;
    const transactions = result[0].data;

    return {
      total: metadata,
      transactions: transactions,
    };
  } catch (error) {
    console.error("Error in fetching transactions", error);
    throw error;
  }
}
