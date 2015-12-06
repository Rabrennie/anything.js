var getLoremIpsum = function (chars) {
	var loremIpsum = 
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies odio non arcu laoreet, eu dignissim arcu " +
		"dapibus. Integer et molestie sem, eu molestie mauris. In non aliquam lacus, at volutpat tellus. Vestibulum ante ipsum " +
		"primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vestibulum erat est, molestie venenatis " +
		"odio tristique vitae. Praesent vel pharetra sem. Morbi egestas tellus mollis posuere consequat. Aliquam aliquet dapibus " +
		"libero. Fusce pretium condimentum purus, in vestibulum purus lacinia vel. Phasellus lobortis imperdiet nibh ut laoreet. " +
		"Proin in arcu dolor. Aenean in urna viverra dolor cursus vulputate. Interdum et malesuada fames ac ante ipsum primis in " +
		"faucibus. Curabitur lacinia sem quis posuere gravida. Sed iaculis mauris at est vehicula, eu aliquam lacus ultricies. " +
		"Maecenas quis varius purus. Suspendisse tempor accumsan velit ac ornare. Aliquam vel diam diam. Vivamus bibendum, " +
		"urna quis hendrerit bibendum, nisi neque consectetur sem, a aliquam eros est sit amet enim. Cras mollis ipsum ac augue " +
		"auctor molestie. Nulla a fermentum enim. Mauris mattis quis libero in finibus. Vivamus maximus sapien eget nulla finibus, " + 
		"a molestie mauris cursus. Suspendisse quis sollicitudin dui. Etiam vel tellus vitae elit varius sagittis. Vestibulum ante " +
		"ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque tellus lacus, congue ut lorem a, rutrum " +
		"semper tortor. Vivamus ut malesuada neque, nec luctus leo. Phasellus ac venenatis erat. Aenean rhoncus vel mauris vel " +
		"rutrum. Maecenas lobortis, nisl sed sollicitudin faucibus, sapien ante tincidunt enim, nec rutrum turpis urna id nunc. " +
		"Suspendisse nec augue et mauris venenatis iaculis. Integer fermentum cursus porta. Phasellus ante diam, condimentum sit " +
		"amet dolor hendrerit, posuere varius ex. Pellentesque posuere pellentesque orci in condimentum. Aliquam erat volutpat. " +
		"Phasellus facilisis lectus arcu, vitae efficitur quam vestibulum et. Class aptent taciti sociosqu ad litora torquent per " +
		"conubia nostra, per inceptos himenaeos. Vivamus convallis lorem malesuada augue vulputate, sit amet vestibulum turpis " +
		"ultrices. Cras ac volutpat enim. Vivamus tincidunt porta neque, at cursus ligula efficitur at. Maecenas dapibus bibendum " +
		"odio, ut posuere est porttitor id. Aliquam varius faucibus orci vitae dapibus. Morbi ac ex elit. Etiam quis mauris laoreet, " +
		"tristique est vel, porta massa. Integer placerat, sem eu mattis luctus, sapien libero blandit nibh, eget efficitur est dui " +
		"vitae augue. Aenean sit amet ex augue. Pellentesque fringilla, ipsum eu suscipit varius, diam risus maximus mi, vitae luctus " +
		"ligula elit nec est. Curabitur eget luctus est. Cras eu nibh cursus, feugiat libero at, cursus leo. Suspendisse congue sapien " +
		"nisi, quis tristique ante imperdiet id.";
		
		if (chars > 2798) {
			chars = 2798;
		}
		
		return loremIpsum.substring(0, chars);
}

anything.prototype.getLoremIpsum = getLoremIpsum;
