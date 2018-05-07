import { Request, Response } from 'express';
import { Controller, Get, Req, Res } from "routing-controllers";
import { Company, Event } from "../database/models"

@Controller()
export class DemoController {
  @Get("/demo")
  async index(@Req() req: Request, @Res() res: Response): Promise<Response>{
    try {
      let company = await Company.findAll()
      let events = await Event.findAll()
      return res.json({
        company, events
      })
    } catch(err) {
      return res.status(500).json()
    }
  }
} 