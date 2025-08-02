import { prisma } from "../../database";
import { Campaign } from "../../generated/prisma";
import { AddLeadToCampaignAttributes, CampaignRepository, CreateCampaignAttributes } from "../CampaignsRepository";

export class PrismaCampaignsRepository implements CampaignRepository {
    find(): Promise<Campaign[]> {
        return prisma.campaign.findMany()
    }

    findById(id: number): Promise<Campaign | null> {
        return prisma.campaign.findUnique({
            where: { id },
            include: {
                leads: {
                    include: {
                        lead: true
                    }
            }
        }
        })
    }

    create(attibutes: CreateCampaignAttributes): Promise<Campaign> {
        return prisma.campaign.create({ data: attibutes })
    }

    async updateById(id: number, attibutes: Partial<CreateCampaignAttributes>): Promise<Campaign | null> {
        const campaignExists = await prisma.campaign.findUnique({ where: { id } })
        if (!campaignExists) return null
        return prisma.campaign.update({
            where: { id },
            data: attibutes
        })
    }

    async deleteById(id: number): Promise<Campaign | null> {
        const campaignExists = await prisma.campaign.findUnique({ where: { id } })
        if (!campaignExists) return null
        return prisma.campaign.delete({ where: { id }})
    }

    async addLead(attributes: AddLeadToCampaignAttributes): Promise<void> {
    await prisma.leadCampaign.create({ data: attributes })
    }

    async updateLeadStatus(attributes: AddLeadToCampaignAttributes): Promise<void> {
    await prisma.leadCampaign.update({
        data: { status: attributes.status },
        where: {
        leadId_campaignId: {
            campaignId: attributes.campaignId,
            leadId: attributes.leadId,
        }
    }
    })
    }

    async removeLead(campaignId: number, leadId: number): Promise<void> {
    await prisma.leadCampaign.delete({
        where: {
        leadId_campaignId: { campaignId, leadId }
        }
    })
    }
}