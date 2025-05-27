import { Resend } from 'resend';

export async function POST(req) {
    const body = await req.json();

    const resend = new Resend('re_68YRJjvq_BCupuZ7Jb1GrJkBCVVdnckA5');

    // Build HTML from form data
    const html = `
    <h2>New Website Questionnaire Submission</h2>
    <ul>
      <li><strong>Company Name:</strong> ${body.companyName || ""}</li>
      <li><strong>Company Description:</strong> ${body.companyDescription || ""}</li>
      <li><strong>Target Audience:</strong> ${body.targetAudience || ""}</li>
      <li><strong>USP:</strong> ${body.uniqueSellingProposition || ""}</li>
      <li><strong>Project Type:</strong> ${body.projectType || ""}</li>
      <li><strong>SEO Optimization:</strong> ${body.seoOptimization || ""}</li>
      <li><strong>Keywords:</strong> ${body.keywords || ""}</li>
      <li><strong>Existing Website URL:</strong> ${body.existingWebsiteUrl || ""}</li>
      <li><strong>Existing Website Likes:</strong> ${body.existingWebsiteLikes || ""}</li>
      <li><strong>Existing Website Dislikes:</strong> ${body.existingWebsiteDislikes || ""}</li>
      <li><strong>Reference Website 1:</strong> ${body.referenceWebsite1 || ""}</li>
      <li><strong>Reference Website 2:</strong> ${body.referenceWebsite2 || ""}</li>
      <li><strong>Reference Website 3:</strong> ${body.referenceWebsite3 || ""}</li>
      <li><strong>Reference Website Likes:</strong> ${body.referenceWebsiteLikes || ""}</li>
      <li><strong>Platform:</strong> ${body.platform || ""}</li>
      <li><strong>Pages Needed:</strong> ${body.pagesNeeded || ""}</li>
      <li><strong>Features Needed:</strong> ${body.featuresNeeded || ""}</li>
      <li><strong>Website Goal:</strong> ${body.websiteGoal || ""}</li>
      <li><strong>Content Ready:</strong> ${body.contentReady || ""}</li>
      <li><strong>Brand Book:</strong> ${body.brandBook || ""}</li>
      <li><strong>Launch Date:</strong> ${body.launchDate || ""}</li>
      <li><strong>Budget:</strong> ${body.budget || ""}</li>
      <li><strong>Maintenance Help:</strong> ${body.maintenanceHelp || ""}</li>
      <li><strong>Content Marketing Help:</strong> ${body.contentMarketingHelp || ""}</li>
      <li><strong>Submission Date:</strong> ${body.submissionDate || ""}</li>
    </ul>
  `;

    try {
        await resend.emails.send({
            from: 'onboarding@webfudge.in',
            to: 'webfudgeagency@gmail.com',
            subject: 'New Website Questionnaire Submission',
            html,
        });
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (e) {
        return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500 });
    }
}
