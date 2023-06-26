import { useTranslation } from "react-i18next";
import "./privacypolicy.css";

const Privacypolicy = () => {
	const { t } = useTranslation();
	return (
		<div className="privacycontainer">
			<div className="privacypolicy">
				<h1>{t("privacyPolicy.heading")}</h1>
				<div>
					<p>
						<span>{t("privacyPolicy.desc")}&nbsp;</span>
						<span>
							<a href="https://www.beimagine.tech">
								<span>https://www.beimagine.tech</span>
							</a>
						</span>
						<span>, </span>
						<span>
							<a href="https://www.bitmemoir.com">
								<span>https://www.bitmemoir.com</span>
							</a>
						</span>
						<span>
							, <a>{t("privacyPolicy.sites")}</a>
						</span>
						<span>
							<span>
								<a>{t("privacyPolicy.legalReference")}</a>&nbsp;
							</span>
						</span>
						<span>{t("privacyPolicy.servicesDesc")}</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<span>{t("privacyPolicy.acceptanceDesc")}</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<span>{t("privacyPolicy.thirdPartyDesc")}</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<b>
							<span>
								{t("privacyPolicy.whatWeCollectHeading")}
							</span>
						</b>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<span>{t("privacyPolicy.whatWeCollectDesc")}</span>
					</p>

					<p>
						<b>
							<span>&nbsp;</span>
						</b>
					</p>

					<p>
						<b>
							<span>
								{t("privacyPolicy.informationYouGiveUs")}
							</span>
						</b>
						<span>
							&nbsp;{t("privacyPolicy.informationWeCollect")}
						</span>
					</p>

					<ul>
						<li>
							<span>{t("privacyPolicy.identityInfo")}</span>
						</li>
					</ul>

					<ul>
						<li>
							<span>{t("privacyPolicy.contactInfo")}</span>
						</li>
					</ul>

					<ul>
						<li>
							<span>{t("privacyPolicy.profileInfo")}</span>
						</li>
					</ul>

					<ul>
						<li>
							<span>
								{t("privacyPolicy.feedbackCorrespondence")}
							</span>
						</li>
					</ul>

					<ul>
						<li>
							<span>{t("privacyPolicy.financialInfo")}</span>
						</li>
					</ul>

					<ul>
						<li>
							<span>{t("privacyPolicy.transactionInfo")}</span>
						</li>
					</ul>

					<ul>
						<li>
							<span>{t("privacyPolicy.usageInfo")}</span>
						</li>
					</ul>

					<ul>
						<li>
							<span>{t("privacyPolicy.marketingInfo")}</span>
						</li>
					</ul>

					<ul>
						<li>
							<span>{t("privacyPolicy.financialInfo2")}</span>
						</li>
						<li>
							<span>{t("privacyPolicy.technicalInfo")}</span>
						</li>
					</ul>

					<p>
						<b>
							<span>&nbsp;</span>
						</b>
					</p>

					<p>
						<b>
							<span>
								{t("privacyPolicy.furtherInformationTitle")}
							</span>
						</b>
						<span>
							{t("privacyPolicy.furtherInformationIntro")}
						</span>
					</p>

					<ul>
						<li>
							<span>{t("privacyPolicy.identityInfo2")}</span>
						</li>
					</ul>

					<ul>
						<li>
							<span>{t("privacyPolicy.passportInfo")}</span>
						</li>
					</ul>

					<ul>
						<li>
							<span>{t("privacyPolicy.amlInfo")}</span>
						</li>
					</ul>

					<ul>
						<li>
							<span>{t("privacyPolicy.sourceOfFunds")}</span>
						</li>
						<li>
							<span>{t("privacyPolicy.tokenHoldingsInfo")}</span>
						</li>
					</ul>

					<p>
						<b>
							<span>
								{t("privacyPolicy.informationFromOthersTitle")}
							</span>
						</b>
						<span>
							{t("privacyPolicy.informationFromOthersIntro")}
						</span>
					</p>

					<ul>
						<li>
							<b>
								<span>
									{t("privacyPolicy.ssoRegistrationTitle")}
								</span>
							</b>
							<span>
								{t("privacyPolicy.ssoRegistrationInfo")}
								<a
									href="https://policies.google.com/privacy/"
									target="_blank">
									<span>
										{t("privacyPolicy.googlePrivacyPolicy")}
									</span>
								</a>
								{t("privacyPolicy.ssoRegistrationNote")}
							</span>
						</li>
					</ul>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<b>
							<span>
								{t(
									"privacyPolicy.infoAutomaticallyCollectedTitle"
								)}
							</span>
						</b>
						<span>
							{t("privacyPolicy.infoAutomaticallyCollectedIntro")}
						</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<span>
							{t("privacyPolicy.cookiesIntro")}
							<a href="cookies-policy.html">
								{t("privacyPolicy.cookiesPolicy")}
							</a>
							{t("privacyPolicy.cookiesEnd")}
						</span>
					</p>

					<p>
						<span>
							{t("privacyPolicy.googleAnalyticsIntro")}
							<a
								href="https://www.google.com/analytics/terms/us.html"
								target="_blank">
								{t("privacyPolicy.googleAnalyticsLink")}
							</a>
							{t("privacyPolicy.googleAnalyticsNote")}
						</span>
					</p>

					<p>
						<a>
							<span>
								{t("privacyPolicy.eventTrackingToolIntro")}
							</span>
						</a>
						<span>
							{t("privacyPolicy.eventTrackingToolLink")}
							<span>
								<a>[SM-Legal2]</a>
							</span>
						</span>
					</p>

					<p>
						<span>
							{t("privacyPolicy.serviceOptimizationIntro")}
						</span>
					</p>

					<p>
						<b>
							<span>
								{t(
									"privacyPolicy.informationNotCollectedTitle"
								)}
							</span>
						</b>
						<span>
							{t("privacyPolicy.informationNotCollectedIntro")}
						</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<b>
							<span>
								{t(
									"privacyPolicy.useOfPersonalInformationTitle"
								)}
							</span>
						</b>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<b>
							<i>
								<span>
									{t("privacyPolicy.provideServiceTitle")}
								</span>
							</i>
						</b>
					</p>

					<p>
						<span>
							{t("privacyPolicy.personalInformationUsageIntro")}
						</span>
					</p>

					<ul>
						<li>
							<span>{t("privacyPolicy.enableAccessAndUse")}</span>
						</li>
						<li>
							<span>
								{t("privacyPolicy.deliverProductsAndServices")}
							</span>
						</li>
						<li>
							<span>
								{t(
									"privacyPolicy.processAndCompleteTransactions"
								)}
							</span>
						</li>
						<li>
							<span>{t("privacyPolicy.sendInformation")}</span>
						</li>
					</ul>

					<p>
						<b>
							<i>
								<span>&nbsp;</span>
							</i>
						</b>
					</p>

					<p>
						<b>
							<i>
								<span>
									{t("privacyPolicy.complyWithLawTitle")}
								</span>
							</i>
						</b>
					</p>

					<p>
						<span>{t("privacyPolicy.complyWithLawIntro")}</span>
					</p>

					<p>
						<b>
							<i>
								<span>&nbsp;</span>
							</i>
						</b>
					</p>

					<p>
						<b>
							<i>
								<span>
									{t("privacyPolicy.communicateWithTitle")}
								</span>
							</i>
						</b>
					</p>

					<p>
						<span>{t("privacyPolicy.communicateWithIntro")}</span>
					</p>

					<p>
						<b>
							<i>
								<span>&nbsp;</span>
							</i>
						</b>
					</p>

					<p>
						<b>
							<i>
								<span>
									{t("privacyPolicy.optimizePlatformTitle")}
								</span>
							</i>
						</b>
					</p>

					<p>
						<span>{t("privacyPolicy.optimizePlatformIntro")}</span>
					</p>

					<p>
						<b>
							<i>
								<span>&nbsp;</span>
							</i>
						</b>
					</p>

					<p>
						<b>
							<i>
								<span>
									{t("privacyPolicy.withYourConsentTitle")}
								</span>
							</i>
						</b>
					</p>

					<p>
						<span>{t("privacyPolicy.withYourConsentIntro")}</span>
					</p>

					<p>
						<b>
							<i>
								<span>&nbsp;</span>
							</i>
						</b>
					</p>

					<p>
						<b>
							<i>
								<span>
									{t("privacyPolicy.complianceTitle")}
								</span>
							</i>
						</b>
					</p>

					<p>
						<span>{t("privacyPolicy.complianceIntro")}</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<b>
							<span>
								{t(
									"privacyPolicy.sharingOfPersonalInformationTitle"
								)}
							</span>
						</b>
					</p>

					<p>
						<span>
							{t(
								"privacyPolicy.sharingOfPersonalInformationIntro"
							)}
						</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<ul>
						<li>
							<b>
								<span>
									{t("privacyPolicy.affiliatesTitle")}
								</span>
							</b>
							<span>{t("privacyPolicy.affiliatesIntro")}</span>
						</li>
					</ul>

					<p>
						<span>&nbsp;</span>
					</p>

					<ul>
						<li>
							<b>
								<span>
									{t("privacyPolicy.businessTransfersTitle")}
								</span>
							</b>
							<span>
								{t("privacyPolicy.businessTransfersIntro")}
							</span>
						</li>
					</ul>

					<p>
						<span>&nbsp;</span>
					</p>

					<ul>
						<li>
							<b>
								<span>
									{t("privacyPolicy.complianceWithLawsTitle")}
								</span>
							</b>
							<span>
								{t("privacyPolicy.complianceWithLawsIntro")}
							</span>
						</li>
					</ul>

					<p>
						<span>&nbsp;</span>
					</p>

					<ul>
						<li>
							<ul>
								<li>
									<span>
										{t("privacyPolicy.complyWithKYCAML")}
									</span>
								</li>
								<li>
									<span>
										{t("privacyPolicy.respondToRequests")}
									</span>
								</li>
								<li>
									<span>
										{t(
											"privacyPolicy.protectRightsAndProperty"
										)}
									</span>
								</li>
								<li>
									<span>
										{t("privacyPolicy.emergencySituation")}
									</span>
								</li>
							</ul>
						</li>
					</ul>

					<p>
						<span>&nbsp;</span>
					</p>

					<ul>
						<li>
							<b>
								<span>
									{t(
										"privacyPolicy.professionalAdvisorsTitle"
									)}
								</span>
							</b>
							<span>
								{t("privacyPolicy.professionalAdvisorsIntro")}
							</span>
						</li>
					</ul>

					<p>
						<span>&nbsp;</span>
					</p>

					<ul>
						<li>
							<b>
								<span>{t("privacyPolicy.otherTitle")}</span>
							</b>
							<span>{t("privacyPolicy.otherIntro")}</span>
						</li>
					</ul>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<span>{t("privacyPolicy.aggregatedData")}</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<b>
							<span>
								{t("privacyPolicy.internationalTransferTitle")}
							</span>
						</b>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<span>
							{t("privacyPolicy.internationalTransferIntro")}
						</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<b>
							<span>
								{t("privacyPolicy.informationSecurityTitle")}
							</span>
						</b>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<span>
							{t("privacyPolicy.informationSecurityIntro")}
						</span>
					</p>

					<p>
						<span>{t("privacyPolicy.retentionOfInformation")}</span>
					</p>

					<p>
						<span>{t("privacyPolicy.retentionOfInformation")}</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<span>{t("privacyPolicy.securityMeasures")}</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<b>
							<span>
								{t(
									"privacyPolicy.informationChoicesAndChangesTitle"
								)}
							</span>
						</b>
					</p>

					<p>
						<i>
							<span>&nbsp;</span>
						</i>
					</p>

					<p>
						<b>
							<i>
								<span>
									{t(
										"privacyPolicy.accessUpdateDeleteInfoTitle"
									)}
								</span>
							</i>
						</b>
					</p>

					<p>
						<span>
							{t("privacyPolicy.accessUpdateDeleteInfoIntro")}
						</span>
					</p>

					<p>
						<b>
							<span>&nbsp;</span>
						</b>
					</p>

					<p>
						<b>
							<span>&nbsp;</span>
						</b>
					</p>

					<p>
						<b>
							<span>&nbsp;</span>
						</b>
					</p>

					<p>
						<b>
							<span>
								{t("privacyPolicy.trackingTechnologiesTitle")}
							</span>
						</b>
					</p>

					<p>
						<span>{t("privacyPolicy.regularCookies")}</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<b>
							<span>
								{t("privacyPolicy.googleAnalyticsTitle")}
							</span>
						</b>
					</p>

					<p>
						<span>{t("privacyPolicy.googleAnalyticsIntro2")}</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<b>
							<span>
								{t("privacyPolicy.contact_information")}
							</span>
						</b>
						<span>
							&nbsp;
							{t("privacyPolicy.contact_information_content")}
						</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<b>
							<span>{t("privacyPolicy.changes_to_policy")}</span>
						</b>
						<span>
							&nbsp;{t("privacyPolicy.changes_to_policy_content")}
						</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<span>
							{t("privacyPolicy.modifications_effective")}
						</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<p>
						<b>
							<span>{t("privacyPolicy.eligibility")}</span>
						</b>
					</p>

					<p>
						<span>{t("privacyPolicy.eligibility_content")}</span>
					</p>

					<p>
						<span>&nbsp;&nbsp;</span>
					</p>

					<p>
						<b>
							<span>
								{t("privacyPolicy.notice_to_all_persons")}
							</span>
						</b>
					</p>

					<p>
						<b>
							<i>
								<span>&nbsp;</span>
							</i>
						</b>
					</p>

					<p>
						<b>
							<i>
								<span>
									{t("privacyPolicy.personal_information")}
								</span>
							</i>
						</b>
					</p>

					<p>
						<span>
							{t("privacyPolicy.personal_information_content")}
						</span>
					</p>

					<p>
						<b>
							<i>
								<span>&nbsp;</span>
							</i>
						</b>
					</p>

					<p>
						<b>
							<i>
								<span>{t("privacyPolicy.sensitive_data")}</span>
							</i>
						</b>
					</p>

					<p>
						<span>{t("privacyPolicy.sensitive_data_content")}</span>
					</p>

					<p>
						<b>
							<i>
								<span>&nbsp;</span>
							</i>
						</b>
					</p>

					<p>
						<b>
							<i>
								<span>
									{t(
										"privacyPolicy.legal_bases_for_processing"
									)}
								</span>
							</i>
						</b>
					</p>

					<p>
						<span>
							{t(
								"privacyPolicy.legal_bases_for_processing_content"
							)}
						</span>
					</p>

					<p>
						<span>&nbsp;</span>
					</p>

					<div className="privacytable">
						<table>
							<tr>
								<td>
									<p>
										{t("privacyPolicy.processing_purpose")}
									</p>
								</td>
								<td>
									<p>{t("privacyPolicy.legal_basis")}</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>{t("privacyPolicy.provide_service")}</p>
								</td>
								<td>
									<p>
										{t(
											"privacyPolicy.provide_service_legal_basis"
										)}
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>
										{t(
											"privacyPolicy.communicate_optimize_platform1"
										)}
									</p>
									<p>
										{t(
											"privacyPolicy.communicate_optimize_platform2"
										)}
									</p>
									<p>
										{t(
											"privacyPolicy.communicate_optimize_platform3"
										)}
									</p>
									<p>{t("privacyPolicy.provide_service")}</p>
								</td>
								<td>
									<p>
										{t(
											"privacyPolicy.communicate_optimize_platform_legal_basis"
										)}
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>
										<span>
											{t("privacyPolicy.comply_with_law")}
										</span>
									</p>
								</td>
								<td>
									<p>
										<span>
											{t(
												"privacyPolicy.comply_with_law_legal_basis"
											)}
										</span>
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>
										<span>
											{t(
												"privacyPolicy.with_your_consent"
											)}
										</span>
									</p>
								</td>
								<td>
									<p>
										<span>
											{t(
												"privacyPolicy.with_your_consent_legal_basis"
											)}
										</span>
									</p>
								</td>
							</tr>
						</table>
					</div>

					<p>
						<b>
							<i>
								<span>&nbsp;</span>
							</i>
						</b>
					</p>

					<p>
						<b>
							<i>
								<span>
									{t("privacyPolicy.contact_information")}
								</span>
							</i>
						</b>
					</p>
					<p>
						<span>
							{t("privacyPolicy.contact_information_content")}
						</span>
					</p>
					<p>
						<b>
							<i>
								<span>&nbsp;</span>
							</i>
						</b>
					</p>
					<p>
						<b>
							<i>
								<span>{t("privacyPolicy.your_rights")}</span>
							</i>
						</b>
					</p>
					<p>
						<span>{t("privacyPolicy.your_rights_content")}</span>
					</p>
					<ul>
						<li>
							<b>
								<span>{t("privacyPolicy.opt_out")}</span>
							</b>
							<span>{t("privacyPolicy.opt_out_content")}</span>
						</li>
						<li>
							<b>
								<span>{t("privacyPolicy.access")}</span>
							</b>
							<span>{t("privacyPolicy.access_content")}</span>
						</li>
						<li>
							<b>
								<span>{t("privacyPolicy.correct")}</span>
							</b>
							<span>{t("privacyPolicy.correct_content")}</span>
						</li>
						<li>
							<b>
								<span>{t("privacyPolicy.delete")}</span>
							</b>
							<span>{t("privacyPolicy.delete_content")}</span>
						</li>
						<li>
							<b>
								<span>{t("privacyPolicy.transfer")}</span>
							</b>
							<span>{t("privacyPolicy.transfer_content")}</span>
						</li>
						<li>
							<b>
								<span>{t("privacyPolicy.restrict")}</span>
							</b>
							<span>{t("privacyPolicy.restrict_content")}</span>
						</li>
						<li>
							<b>
								<span>{t("privacyPolicy.object")}</span>
							</b>
							<span>{t("privacyPolicy.object_content")}</span>
						</li>
					</ul>
					<p>
						<span>{t("privacyPolicy.submit_requests")}</span>
					</p>
					<p>
						<b>
							<i>
								<span>&nbsp;</span>
							</i>
						</b>
					</p>
					<p>
						<b>
							<i>
								<span>
									{t(
										"privacyPolicy.cross_border_data_transfer"
									)}
								</span>
							</i>
						</b>
					</p>
					<p>
						<span>&nbsp;</span>
					</p>
					<p>
						<span>
							{t(
								"privacyPolicy.cross_border_data_transfer_content"
							)}
						</span>
					</p>
					<p>
						<span>&nbsp;</span>
					</p>
					<p>
						<span>{t("privacyPolicy.cookies")}</span>
					</p>
					<p>
						<span>
							{t("privacyPolicy.cookies_content")}
							<a href="#">{t("privacyPolicy.cookies_policy")}</a>.
						</span>
					</p>
					<p>
						<span>&nbsp;</span>
					</p>
				</div>

				<div>
					<div>
						<div>
							<p>
								<span>
									<span>
										&nbsp;
										<a href="#">
											{t("privacyPolicy.[SM-Legal1]")}
										</a>
									</span>
								</span>
								<span>
									{t(
										"privacyPolicy.All BIT websites to go here, kindly input the same"
									)}
								</span>
							</p>
						</div>
					</div>
					<div>
						<div>
							<a name="_msocom_2"></a>
							<p>
								<span>
									<span>
										&nbsp;
										<a href="#">
											{t("privacyPolicy.[SM-Legal2]")}
										</a>
									</span>
								</span>
								<span>
									{t(
										"privacyPolicy.Information to be entered"
									)}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Privacypolicy;
