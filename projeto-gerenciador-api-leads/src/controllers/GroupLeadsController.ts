import { Handler } from "express";
import { AddLeadToGroupRequestSchema, GetGroupLeadsRequestSchema } from "./schemas/GroupsRequestSchema";
import { Prisma } from "../generated/prisma";
import { prisma } from "../database";

export class GroupLeadsController {
    getLeads: Handler = async (req, res, next) => {
        try {
            const groupId = Number(req.params.groupId)
            const query = GetGroupLeadsRequestSchema.parse(req.query)
            const { page = "1", pageSize = "10", sortBy = "name", order = "asc" } = query

            const pageNumber = Number(page)
            const pageSizeNumber = Number(pageSize)

            const where: Prisma.LeadWhereInput = {
                leadGroup: {
                    some: {
                        groupId: groupId
                    }
                }
            }

            const leads = await prisma.lead.findMany({
                where,
                orderBy: { [sortBy]: order },
                skip: (pageNumber - 1) * pageSizeNumber,
                take: pageSizeNumber,
                include: {
                    leadGroup: {
                        select: {
                            group: {
                                select: {
                                    id: true,
                                    name: true
                                }
                            }
                        }
                    }
                }
            })

            const total = await prisma.lead.count({ where })

            res.json({
                leads,
                meta: {
                    page: pageNumber,
                    pageSize: pageSizeNumber,
                    total,
                    totalPages: Math.ceil(total / pageSizeNumber)
                }
            })
        } catch (error) {
            next(error)
        }
    }


    addLead: Handler = async (req, res, next) => {
        try {
            const body = AddLeadToGroupRequestSchema.parse(req.body)
            const updatedGroup = await prisma.leadGroup.create({
                data: {
                    groupId: Number(req.params.groupId),
                    leadId: body.leadId
                }
            })
            res.status(201).json(updatedGroup)
        } catch (error) {
            next(error)
        }
    }


    removeLead: Handler = async (req, res, next) => {
        try {
            const removedLeadGroup  = await prisma.leadGroup.delete({
                where: {
                    leadId_groupId: {
                        groupId: Number(req.params.groupId),
                        leadId: Number(req.params.leadId)
                    }
                }
            })
            res.json({ removedLeadGroup })
        } catch (error) {
            next(error)
        }
    }
}