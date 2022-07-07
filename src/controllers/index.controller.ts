import { pool } from './../database';
import { Request, Response } from "express"
import { QueryResult } from 'pg';
import { uuid } from 'uuidv4';



export const getfranchise = async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const desingation = req.query.designation
        const sql = `SELECT S.shop_id, S.designation ,S.adresse, S.tel,S.image,S.mode_vente,S.mode_paiement ,F.couleur,F.logo,S.horaire from shop S 
         inner join franchise F on
 	    shop_id in (select json_object_keys(listshopid)::int  from franchise where  designation='${desingation}') 									 
	    where  F.designation='${desingation}' `
        console.log(sql)

        const response: QueryResult = await pool.query(sql);
        // const response:QueryResult= await pool.query('SELECT iuud AS iuud , Designation AS Designation , json_to_recordset(listshopid) AS Listshopid  from franchise');
        //const response:QueryResult= await pool.query('SELECT A.iuud  , A.Designation  , json_to_recordset(A.listshopid) AS Listshopid , B.all   from franchise A  , shop B');

        //  for(let i = 0; i <= response.rows.length; i++){
        //      const resp:QueryResult= await pool.query('SELECT * FROM franchise inner join shop B on "shop_id"=response.rows[i]');
        //      console.log(resp.rows)
        //       res.send(resp.rows)
        //      }
        //  const response:QueryResult= await pool.query('SELECT * FROM franchise A , shop B inner join shop B on B.shop_id=A.json_object_keys(listshopid)::int WHERE B.shop_id=A.json_object_keys(listshopid)::int ');
        console.log(response.rows)

        return res.json({
            Designation: desingation,
            Listshop: response.rows
        }
        )
    }
    catch (e) {
        console.log(e)
    }
}
export const getallfranchise = async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const desingation = req.query.designation
        const sql = `SELECT * from franchise`
        console.log(sql)

        const response: QueryResult = await pool.query(sql);

        console.log(response.rows)

        return res.json([response.rows]
        )
    }
    catch (e) {
        console.log(e)
    }
}

