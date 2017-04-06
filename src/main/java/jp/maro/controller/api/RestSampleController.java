package jp.maro.controller.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import jp.maro.model.SampleModel;

@RestController
@RequestMapping("/api/sample")
public class RestSampleController {

	@RequestMapping(method = RequestMethod.GET)
	public SampleModel get() {
		SampleModel sampleModel = new SampleModel();
		sampleModel.setData1("this is data1");
		sampleModel.setData2("this is data2");
		sampleModel.setData3("this is data3");
		return sampleModel;
	}
}
