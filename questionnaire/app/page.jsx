"use client";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
  Download,
  FileText,
  Globe,
  Users,
  Target,
  Wrench,
  Search,
  Eye,
  Palette,
  Calendar,
  DollarSign,
  Settings,
  PenTool,
} from "lucide-react";

const WebsiteDesignQuestionnaire = () => {
  const [formData, setFormData] = useState({
    companyDescription: "",
    targetAudience: "",
    uniqueSellingProposition: "",
    projectType: "",
    seoOptimization: "",
    keywords: "",
    existingWebsiteUrl: "",
    existingWebsiteLikes: "",
    existingWebsiteDislikes: "",
    referenceWebsite1: "",
    referenceWebsite2: "",
    referenceWebsite3: "",
    referenceWebsiteLikes: "",
    platform: "",
    pagesNeeded: "",
    featuresNeeded: "",
    websiteGoal: "",
    contentReady: "",
    brandBook: "",
    launchDate: "",
    budget: "",
    maintenanceHelp: "",
    contentMarketingHelp: "",
  });

  const [submissions, setSubmissions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = {
      ...formData,
      submissionDate: new Date().toISOString(),
      id: Date.now(),
    };
    setSubmissions((prev) => [...prev, submission]);

    // Reset form
    setFormData({
      companyDescription: "",
      targetAudience: "",
      uniqueSellingProposition: "",
      projectType: "",
      seoOptimization: "",
      keywords: "",
      existingWebsiteUrl: "",
      existingWebsiteLikes: "",
      existingWebsiteDislikes: "",
      referenceWebsite1: "",
      referenceWebsite2: "",
      referenceWebsite3: "",
      referenceWebsiteLikes: "",
      platform: "",
      pagesNeeded: "",
      featuresNeeded: "",
      websiteGoal: "",
      contentReady: "",
      brandBook: "",
      launchDate: "",
      budget: "",
      maintenanceHelp: "",
      contentMarketingHelp: "",
    });

    alert("Form submitted successfully!");
  };

  const exportToExcel = () => {
    if (submissions.length === 0) {
      alert("No data to export. Please submit at least one form first.");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(
      submissions.map((submission) => ({
        "Submission Date": new Date(
          submission.submissionDate
        ).toLocaleDateString(),
        "Company Description": submission.companyDescription,
        "Target Audience": submission.targetAudience,
        "Unique Selling Proposition": submission.uniqueSellingProposition,
        "Project Type": submission.projectType,
        "SEO Optimization": submission.seoOptimization,
        Keywords: submission.keywords,
        "Existing Website URL": submission.existingWebsiteUrl,
        "Existing Website Likes": submission.existingWebsiteLikes,
        "Existing Website Dislikes": submission.existingWebsiteDislikes,
        "Reference Website 1": submission.referenceWebsite1,
        "Reference Website 2": submission.referenceWebsite2,
        "Reference Website 3": submission.referenceWebsite3,
        "Reference Website Likes": submission.referenceWebsiteLikes,
        Platform: submission.platform,
        "Pages Needed": submission.pagesNeeded,
        "Features Needed": submission.featuresNeeded,
        "Website Goal": submission.websiteGoal,
        "Content Ready": submission.contentReady,
        "Brand Book": submission.brandBook,
        "Launch Date": submission.launchDate,
        Budget: submission.budget,
        "Maintenance Help": submission.maintenanceHelp,
        "Content Marketing Help": submission.contentMarketingHelp,
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Website Design Questionnaire"
    );
    XLSX.writeFile(workbook, "website-design-questionnaire-responses.xlsx");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-8 w-8" />
              <h1 className="text-3xl font-bold">
                Website Design Questionnaire
              </h1>
            </div>
            <p className="text-blue-100 text-lg">
              Help us understand your vision and requirements for your new
              website
            </p>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2 text-blue-100">
                <FileText className="h-4 w-4" />
                <span className="text-sm">
                  Submissions: {submissions.length}
                </span>
              </div>
              <button
                onClick={exportToExcel}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                <Download className="h-4 w-4" />
                Export to Excel
              </button>
            </div>
          </div>

          {/* Form */}
          <form className="p-8 space-y-8">
            {/* Company Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Company Information
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  1. What does your company do?
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  name="companyDescription"
                  value={formData.companyDescription}
                  onChange={handleInputChange}
                  rows={3}
                  className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your company's products, services, and mission..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  2. Who is your target audience?
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  rows={3}
                  className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your ideal customers, their demographics, interests, and pain points..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  3. What's your Unique Selling Proposition (USP)?
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  name="uniqueSellingProposition"
                  value={formData.uniqueSellingProposition}
                  onChange={handleInputChange}
                  rows={3}
                  className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What makes your company different from competitors?"
                  required
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Wrench className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Project Details
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  4. Do you want to improve an existing website, or create a
                  website from scratch?
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option className="text-gray-800" value="">
                    Select an option
                  </option>
                  <option className="text-gray-800" value="improve-existing">
                    Improve existing website
                  </option>
                  <option className="text-gray-800" value="create-from-scratch">
                    Create from scratch
                  </option>
                  <option className="text-gray-800" value="redesign">
                    Complete redesign
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  5. Do you want your website to be optimized for SEO?
                </label>
                <select
                  name="seoOptimization"
                  value={formData.seoOptimization}
                  onChange={handleInputChange}
                  className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option className="text-gray-800" value="">
                    Select an option
                  </option>
                  <option className="text-gray-800" value="yes">
                    Yes, SEO optimization is important
                  </option>
                  <option className="text-gray-800" value="no">
                    No, not a priority
                  </option>
                  <option className="text-gray-800" value="unsure">
                    I'm not sure
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have a list of keywords you'd like to target?
                </label>
                <textarea
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleInputChange}
                  rows={2}
                  className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="List your target keywords separated by commas..."
                />
              </div>
            </div>

            {/* Current Website */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Eye className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Current Website Analysis
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  6. What is the URL of your existing website (if any)?
                </label>
                <input
                  type="url"
                  name="existingWebsiteUrl"
                  value={formData.existingWebsiteUrl}
                  onChange={handleInputChange}
                  className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What do you like about your existing website?
                  </label>
                  <textarea
                    name="existingWebsiteLikes"
                    value={formData.existingWebsiteLikes}
                    onChange={handleInputChange}
                    rows={3}
                    className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What works well?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What do you dislike about your existing website?
                  </label>
                  <textarea
                    name="existingWebsiteDislikes"
                    value={formData.existingWebsiteDislikes}
                    onChange={handleInputChange}
                    rows={3}
                    className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What needs improvement?"
                  />
                </div>
              </div>
            </div>

            {/* Reference Websites */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Search className="h-5 w-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Reference Websites
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  7. What are the URLs of 2-3 reference websites that you like?
                </label>
                <div className="space-y-3">
                  <input
                    type="url"
                    name="referenceWebsite1"
                    value={formData.referenceWebsite1}
                    onChange={handleInputChange}
                    className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Reference website 1"
                  />
                  <input
                    type="url"
                    name="referenceWebsite2"
                    value={formData.referenceWebsite2}
                    onChange={handleInputChange}
                    className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Reference website 2"
                  />
                  <input
                    type="url"
                    name="referenceWebsite3"
                    value={formData.referenceWebsite3}
                    onChange={handleInputChange}
                    className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Reference website 3"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What do you like about these reference websites?
                </label>
                <textarea
                  name="referenceWebsiteLikes"
                  value={formData.referenceWebsiteLikes}
                  onChange={handleInputChange}
                  rows={3}
                  className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe the design elements, features, or functionality you admire..."
                />
              </div>
            </div>

            {/* Technical Requirements */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Settings className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Technical Requirements
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  8. Do you know what platform you want to use for your site?
                </label>
                <select
                  name="platform"
                  value={formData.platform}
                  onChange={handleInputChange}
                  className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option className="text-gray-800" value="">
                    Select a platform or leave blank if unsure
                  </option>
                  <option className="text-gray-800" value="wordpress">
                    WordPress
                  </option>
                  <option className="text-gray-800" value="shopify">
                    Shopify
                  </option>
                  <option className="text-gray-800" value="wix">
                    Wix
                  </option>
                  <option className="text-gray-800" value="squarespace">
                    Squarespace
                  </option>
                  <option className="text-gray-800" value="webflow">
                    Webflow
                  </option>
                  <option className="text-gray-800" value="custom">
                    Custom Development
                  </option>
                  <option className="text-gray-800" value="other">
                    Other
                  </option>
                  <option className="text-gray-800" value="unsure">
                    I'm not sure
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  9. What pages do you need on your website?
                </label>
                <textarea
                  name="pagesNeeded"
                  value={formData.pagesNeeded}
                  onChange={handleInputChange}
                  rows={4}
                  className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Home, About Us, Services, Products, Contact, Blog, etc."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  10. What features do you need on your website?
                </label>
                <textarea
                  name="featuresNeeded"
                  value={formData.featuresNeeded}
                  onChange={handleInputChange}
                  rows={4}
                  className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Contact forms, E-commerce, Blog, Photo gallery, Online booking, etc."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  11. What's the underlying goal of your website?
                </label>
                <textarea
                  name="websiteGoal"
                  value={formData.websiteGoal}
                  onChange={handleInputChange}
                  rows={3}
                  className="text-gray-800 placeholder-gray-700 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Generate leads, Sell products online, Showcase portfolio, Build brand awareness, etc."
                  required
                />
              </div>
            </div>

            {/* Content & Design */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-pink-100 rounded-lg">
                  <Palette className="h-5 w-5 text-pink-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Content & Design
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  12. Do you have the content ready for your site?
                </label>
                <select
                  name="contentReady"
                  value={formData.contentReady}
                  onChange={handleInputChange}
                  className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option className="text-gray-800" value="">
                    Select an option
                  </option>
                  <option className="text-gray-800" value="yes-all">
                    Yes, all content is ready
                  </option>
                  <option className="text-gray-800" value="partially">
                    Partially ready
                  </option>
                  <option className="text-gray-800" value="no">
                    No, need help with content creation
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  13. Does your company have a brand book covering things like
                  colors and fonts?
                </label>
                <select
                  name="brandBook"
                  value={formData.brandBook}
                  onChange={handleInputChange}
                  className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option className="text-gray-800" value="">
                    Select an option
                  </option>
                  <option className="text-gray-800" value="yes-comprehensive">
                    Yes, comprehensive brand guidelines
                  </option>
                  <option className="text-gray-800" value="yes-basic">
                    Yes, basic brand elements
                  </option>
                  <option className="text-gray-800" value="no">
                    No, need help with branding
                  </option>
                </select>
              </div>
            </div>

            {/* Timeline & Budget */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-teal-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Timeline & Budget
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  14. When would you like to launch your new site?
                </label>
                <select
                  name="launchDate"
                  value={formData.launchDate}
                  onChange={handleInputChange}
                  className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option className="text-gray-800" value="">
                    Select a timeframe
                  </option>
                  <option className="text-gray-800" value="asap">
                    ASAP
                  </option>
                  <option className="text-gray-800" value="1-month">
                    Within 1 month
                  </option>
                  <option className="text-gray-800" value="2-3-months">
                    2-3 months
                  </option>
                  <option className="text-gray-800" value="3-6-months">
                    3-6 months
                  </option>
                  <option className="text-gray-800" value="6-months-plus">
                    6+ months
                  </option>
                  <option className="text-gray-800" value="flexible">
                    Flexible timeline
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  15. What is your budget for the website?
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option className="text-gray-800" value="">
                    Select a budget range
                  </option>
                  <option className="text-gray-800" value="under-1k">
                    Under $1,000
                  </option>
                  <option className="text-gray-800" value="1k-5k">
                    $1,000 - $5,000
                  </option>
                  <option className="text-gray-800" value="5k-10k">
                    $5,000 - $10,000
                  </option>
                  <option className="text-gray-800" value="10k-25k">
                    $10,000 - $25,000
                  </option>
                  <option className="text-gray-800" value="25k-50k">
                    $25,000 - $50,000
                  </option>
                  <option className="text-gray-800" value="50k-plus">
                    $50,000+
                  </option>
                  <option className="text-gray-800" value="discuss">
                    Prefer to discuss
                  </option>
                </select>
              </div>
            </div>

            {/* Ongoing Services */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <PenTool className="h-5 w-5 text-amber-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Ongoing Services
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  16. Do you need help updating and maintaining your website?
                </label>
                <select
                  name="maintenanceHelp"
                  value={formData.maintenanceHelp}
                  onChange={handleInputChange}
                  className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option className="text-gray-800" value="">
                    Select an option
                  </option>
                  <option className="text-gray-800" value="yes-ongoing">
                    Yes, ongoing maintenance service
                  </option>
                  <option className="text-gray-800" value="yes-occasional">
                    Yes, occasional updates only
                  </option>
                  <option className="text-gray-800" value="no-self">
                    No, we'll handle it ourselves
                  </option>
                  <option className="text-gray-800" value="unsure">
                    Not sure yet
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  17. Do you need help with blogging and content marketing?
                </label>
                <select
                  name="contentMarketingHelp"
                  value={formData.contentMarketingHelp}
                  onChange={handleInputChange}
                  className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option className="text-gray-800" value="">
                    Select an option
                  </option>
                  <option className="text-gray-800" value="yes-full">
                    Yes, full content marketing service
                  </option>
                  <option className="text-gray-800" value="yes-blog">
                    Yes, blog writing only
                  </option>
                  <option className="text-gray-800" value="no-self">
                    No, we'll create our own content
                  </option>
                  <option className="text-gray-800" value="unsure">
                    Not sure yet
                  </option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-medium text-lg hover:from-blue-700 hover:to-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit Questionnaire
              </button>
            </div>
          </form>
        </div>

        {/* Submissions Preview */}
        {submissions.length > 0 && (
          <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Recent Submissions
              </h3>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {submissions.length} total
              </span>
            </div>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {submissions
                .slice(-3)
                .reverse()
                .map((submission) => (
                  <div
                    key={submission.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        {new Date(submission.submissionDate).toLocaleString()}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {submission.companyDescription.substring(0, 50)}...
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Target: {submission.targetAudience.substring(0, 80)}...
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebsiteDesignQuestionnaire;
